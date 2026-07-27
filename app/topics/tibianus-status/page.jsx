import TibianusStatusKeywordPage, { generateMetadata } from './tibianus-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibianusStatusKeywordPage />;
}
