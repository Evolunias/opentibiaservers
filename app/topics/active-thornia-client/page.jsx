import ActiveThorniaClientKeywordPage, { generateMetadata } from './active-thornia-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveThorniaClientKeywordPage />;
}
