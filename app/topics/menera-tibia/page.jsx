import MeneraTibiaKeywordPage, { generateMetadata } from './menera-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MeneraTibiaKeywordPage />;
}
