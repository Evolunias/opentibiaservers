import SabrehavenLowExpServerSwedenKeywordPage, { generateMetadata } from './sabrehaven-low-exp-server-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SabrehavenLowExpServerSwedenKeywordPage />;
}
