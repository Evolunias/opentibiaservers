import SabrehavenLowExpServerEuropeKeywordPage, { generateMetadata } from './sabrehaven-low-exp-server-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SabrehavenLowExpServerEuropeKeywordPage />;
}
