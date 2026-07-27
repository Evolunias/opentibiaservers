import ActiveThorniaLoginKeywordPage, { generateMetadata } from './active-thornia-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveThorniaLoginKeywordPage />;
}
