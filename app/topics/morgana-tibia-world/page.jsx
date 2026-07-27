import MorganaTibiaWorldKeywordPage, { generateMetadata } from './morgana-tibia-world';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MorganaTibiaWorldKeywordPage />;
}
