import CoxaotTibiaKeywordPage, { generateMetadata } from './coxaot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CoxaotTibiaKeywordPage />;
}
