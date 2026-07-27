import LiberaTibiaWorldKeywordPage, { generateMetadata } from './libera-tibia-world';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LiberaTibiaWorldKeywordPage />;
}
