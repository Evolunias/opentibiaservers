import PopularCoxaotOpenTibiaKeywordPage, { generateMetadata } from './popular-coxaot-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularCoxaotOpenTibiaKeywordPage />;
}
