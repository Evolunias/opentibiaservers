import LowrateCoxaotOpenTibiaKeywordPage, { generateMetadata } from './lowrate-coxaot-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateCoxaotOpenTibiaKeywordPage />;
}
