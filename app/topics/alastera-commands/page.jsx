import AlasteraCommandsKeywordPage, { generateMetadata } from './alastera-commands';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AlasteraCommandsKeywordPage />;
}
