import OtlandActiveKeywordPage, { generateMetadata } from './otland-active';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtlandActiveKeywordPage />;
}
