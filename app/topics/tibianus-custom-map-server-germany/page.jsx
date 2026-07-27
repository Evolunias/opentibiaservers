import TibianusCustomMapServerGermanyKeywordPage, { generateMetadata } from './tibianus-custom-map-server-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibianusCustomMapServerGermanyKeywordPage />;
}
