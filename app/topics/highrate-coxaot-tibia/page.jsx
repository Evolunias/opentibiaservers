import HighrateCoxaotTibiaKeywordPage, { generateMetadata } from './highrate-coxaot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateCoxaotTibiaKeywordPage />;
}
