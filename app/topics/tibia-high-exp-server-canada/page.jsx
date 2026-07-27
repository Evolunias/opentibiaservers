import TibiaHighExpServerCanadaKeywordPage, { generateMetadata } from './tibia-high-exp-server-canada';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaHighExpServerCanadaKeywordPage />;
}
