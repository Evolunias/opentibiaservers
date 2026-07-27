import ActiveThorniaOtsKeywordPage, { generateMetadata } from './active-thornia-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveThorniaOtsKeywordPage />;
}
