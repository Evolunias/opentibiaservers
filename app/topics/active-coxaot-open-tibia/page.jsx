import ActiveCoxaotOpenTibiaKeywordPage, { generateMetadata } from './active-coxaot-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveCoxaotOpenTibiaKeywordPage />;
}
