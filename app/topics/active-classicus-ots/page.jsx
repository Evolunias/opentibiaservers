import ActiveClassicusOtsKeywordPage, { generateMetadata } from './active-classicus-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveClassicusOtsKeywordPage />;
}
