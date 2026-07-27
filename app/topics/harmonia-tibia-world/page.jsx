import HarmoniaTibiaWorldKeywordPage, { generateMetadata } from './harmonia-tibia-world';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HarmoniaTibiaWorldKeywordPage />;
}
