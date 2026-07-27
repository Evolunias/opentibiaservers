import Serenian3RubinotPage, { generateMetadata } from './serenian3-rubinot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Serenian3RubinotPage />;
}
