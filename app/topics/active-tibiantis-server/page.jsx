import ActiveTibiantisServerKeywordPage, { generateMetadata } from './active-tibiantis-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveTibiantisServerKeywordPage />;
}
