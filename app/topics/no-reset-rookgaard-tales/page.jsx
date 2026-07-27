import NoResetRookgaardTalesKeywordPage, { generateMetadata } from './no-reset-rookgaard-tales';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetRookgaardTalesKeywordPage />;
}
