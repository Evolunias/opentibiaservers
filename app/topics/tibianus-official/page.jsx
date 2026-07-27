import TibianusOfficialKeywordPage, { generateMetadata } from './tibianus-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibianusOfficialKeywordPage />;
}
