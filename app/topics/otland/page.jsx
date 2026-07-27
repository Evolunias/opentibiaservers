import OtlandKeywordPage, { generateMetadata } from './otland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtlandKeywordPage />;
}
