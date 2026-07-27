import NostaltherResetKeywordPage, { generateMetadata } from './nostalther-reset';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NostaltherResetKeywordPage />;
}
