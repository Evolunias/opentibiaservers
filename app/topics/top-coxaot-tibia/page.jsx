import TopCoxaotTibiaKeywordPage, { generateMetadata } from './top-coxaot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopCoxaotTibiaKeywordPage />;
}
