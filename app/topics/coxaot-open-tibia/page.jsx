import CoxaotOpenTibiaKeywordPage, { generateMetadata } from './coxaot-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CoxaotOpenTibiaKeywordPage />;
}
