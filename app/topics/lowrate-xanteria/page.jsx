import LowrateXanteriaKeywordPage, { generateMetadata } from './lowrate-xanteria';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateXanteriaKeywordPage />;
}
