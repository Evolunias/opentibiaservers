import RetroClientSouthAmericaKeywordPage, { generateMetadata } from './retro-client-south-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroClientSouthAmericaKeywordPage />;
}
