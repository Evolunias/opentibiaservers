import TenebraTibiaKeywordPage, { generateMetadata } from './tenebra-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TenebraTibiaKeywordPage />;
}
