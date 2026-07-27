import ActiveXanteriaGuideKeywordPage, { generateMetadata } from './active-xanteria-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveXanteriaGuideKeywordPage />;
}
