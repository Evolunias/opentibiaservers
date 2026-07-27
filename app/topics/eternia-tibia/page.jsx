import EterniaTibiaKeywordPage, { generateMetadata } from './eternia-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EterniaTibiaKeywordPage />;
}
