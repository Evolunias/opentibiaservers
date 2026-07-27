import CustomXanteriaKeywordPage, { generateMetadata } from './custom-xanteria';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomXanteriaKeywordPage />;
}
