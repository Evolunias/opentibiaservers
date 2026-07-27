import ActiveThorniaServerKeywordPage, { generateMetadata } from './active-thornia-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveThorniaServerKeywordPage />;
}
