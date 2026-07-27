import ActiveCoxaotTibiaKeywordPage, { generateMetadata } from './active-coxaot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveCoxaotTibiaKeywordPage />;
}
