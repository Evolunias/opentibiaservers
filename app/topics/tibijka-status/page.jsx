import TibijkaStatusKeywordPage, { generateMetadata } from './tibijka-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibijkaStatusKeywordPage />;
}
