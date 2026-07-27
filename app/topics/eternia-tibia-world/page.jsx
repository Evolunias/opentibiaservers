import EterniaTibiaWorldKeywordPage, { generateMetadata } from './eternia-tibia-world';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EterniaTibiaWorldKeywordPage />;
}
