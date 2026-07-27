import MeneraTibiaWorldKeywordPage, { generateMetadata } from './menera-tibia-world';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MeneraTibiaWorldKeywordPage />;
}
