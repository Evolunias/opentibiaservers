import SabrehavenLowExpServerUkKeywordPage, { generateMetadata } from './sabrehaven-low-exp-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SabrehavenLowExpServerUkKeywordPage />;
}
