import TibianusCustomMapServerPolandKeywordPage, { generateMetadata } from './tibianus-custom-map-server-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibianusCustomMapServerPolandKeywordPage />;
}
