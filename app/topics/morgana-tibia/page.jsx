import MorganaTibiaKeywordPage, { generateMetadata } from './morgana-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MorganaTibiaKeywordPage />;
}
