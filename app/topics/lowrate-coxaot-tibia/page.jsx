import LowrateCoxaotTibiaKeywordPage, { generateMetadata } from './lowrate-coxaot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateCoxaotTibiaKeywordPage />;
}
