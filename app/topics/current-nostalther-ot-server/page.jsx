import CurrentNostaltherOtServerKeywordPage, { generateMetadata } from './current-nostalther-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentNostaltherOtServerKeywordPage />;
}
