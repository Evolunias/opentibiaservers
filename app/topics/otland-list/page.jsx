import OtlandListKeywordPage, { generateMetadata } from './otland-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtlandListKeywordPage />;
}
