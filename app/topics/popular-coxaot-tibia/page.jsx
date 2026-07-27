import PopularCoxaotTibiaKeywordPage, { generateMetadata } from './popular-coxaot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularCoxaotTibiaKeywordPage />;
}
