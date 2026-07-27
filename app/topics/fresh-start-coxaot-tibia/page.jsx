import FreshStartCoxaotTibiaKeywordPage, { generateMetadata } from './fresh-start-coxaot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartCoxaotTibiaKeywordPage />;
}
