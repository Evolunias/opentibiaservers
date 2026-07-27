import TibiaHighExpServerUkKeywordPage, { generateMetadata } from './tibia-high-exp-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaHighExpServerUkKeywordPage />;
}
