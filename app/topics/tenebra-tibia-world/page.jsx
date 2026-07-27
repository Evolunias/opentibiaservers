import TenebraTibiaWorldKeywordPage, { generateMetadata } from './tenebra-tibia-world';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TenebraTibiaWorldKeywordPage />;
}
