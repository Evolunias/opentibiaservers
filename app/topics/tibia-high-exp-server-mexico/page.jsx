import TibiaHighExpServerMexicoKeywordPage, { generateMetadata } from './tibia-high-exp-server-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaHighExpServerMexicoKeywordPage />;
}
