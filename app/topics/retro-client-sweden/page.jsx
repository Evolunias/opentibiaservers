import RetroClientSwedenKeywordPage, { generateMetadata } from './retro-client-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroClientSwedenKeywordPage />;
}
