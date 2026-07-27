import ActiveMediviaKeywordPage, { generateMetadata } from './active-medivia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveMediviaKeywordPage />;
}
