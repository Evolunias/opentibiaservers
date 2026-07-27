import OtlandSwedenKeywordPage, { generateMetadata } from './otland-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtlandSwedenKeywordPage />;
}
